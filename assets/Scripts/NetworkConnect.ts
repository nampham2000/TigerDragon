import {
  _decorator,
  Component,
  instantiate,
  Label,
  Node,
  Prefab,
  Sprite,
  SpriteFrame,
  tween,
  Vec3,
} from "cc";
const { ccclass, property } = _decorator;
import Colyseus from "db://colyseus-sdk/colyseus.js";
import { AudioController } from "./AudioController";
import { Chip } from "./Chip";

@ccclass("NetworkConnect")
export class NetworkConnect extends Component {
  @property({ type: String })
  hostname = "localhost";

  @property({ type: Number })
  port = 80;

  @property({ type: Boolean })
  useSSL = true;

  @property({ type: Node })
  private ListL: Node[] = [];

  @property({ type: Label })
  private ListLabel: Label[] = [];

  @property(Label)
  private TimerDown: Label;

  @property({
    type: Chip,
  })
  private chipNode: Chip;

  @property({
    type: Prefab,
  })
  private prfab: Prefab;

  @property({
    type: Node,
  })
  private DragonNode: Node;

  @property({
    type: Node,
  })
  private TigerNode: Node;

  @property({
    type: Node,
  })
  private TieNode: Node;

  @property({
    type: Node,
  })
  private PayUser: Node;

  client!: Colyseus.Client;
  room!: Colyseus.Room;
  gameState;
  resultDragon: number = 0;
  resultTiger: number = 0;
  TotalUser;
  UserBet;
  NotmeBet;
  result;
  winner;
  currentHost: any;
  balanceUser: any;
  TotalBalanceUser: any;
  betDragon: any;
  betTiger: any;
  betTie: any;

  @property({
    type: AudioController,
  })
  private AudioController: AudioController;

  @property({
    type: SpriteFrame,
  })
  private PayUserSprite: SpriteFrame[] = [];

  start() {
    this.client = new Colyseus.Client(
      `${this.useSSL ? "wss" : "ws"}://${this.hostname}:${this.port}`
    );

    this.connect();
  }

  async connect() {
    try {
      const rooms = await this.client.getAvailableRooms("room1");

      if (rooms.length === 0) {
        this.room = await this.client.create("room1");
        console.log("Created new room with sessionId:", this.room.sessionId);
      } else {
        // Nếu có phòng có sẵn, tham gia vào phòng đầu tiên trong danh sách
        this.room = await this.client.joinById(rooms[0].roomId);
        console.log(
          "Joined existing room with sessionId:",
          this.room.sessionId
        );
      }

      console.log("Joined successfully!");
      console.log("User's sessionId:", this.room.sessionId);

      this.room.onMessage("timer", (message) => {
        this.TimerDown.string = message;
        if (message < 30 && message > 0) {
          this.AudioController.onAudio(3);
        }
        if (message === 0) {
          this.AudioController.onAudio(4);
        }
      });

      this.room.onMessage("winnerList", (message) => {
        console.log("WinList", message);
        // this.winner=message;
        this.PayoutAnim(message);
      });
      this.room.onMessage("result", (message) => {
        console.log(message.result);
        console.log("rong", message.dragonCard.value);
        console.log("ho", message.tigerCard.value);
        this.result = message.result;
      });

      this.room.onMessage("userBet", (message) => {
        if (message.playerID !== this.room.sessionId) {
          console.log("message", message);
          this.UserBet = message.betType;
          this.createSpriteNode(message.playerID);
        } else {
          console.log("false");
        }
      });

      this.room.onMessage("balance", (message) => {
        this.balanceUser = message.balance;
        console.log(message);
      });
      setInterval(() => {
        this.room.send("getBalance");
      }, 1000);
      this.room.onStateChange((state) => {
        console.log("Room state changed:", state);
        console.log("onStateChange: ", state);
        console.log(state.roundState);

        this.betDragon = state.totalBetDragon;
        this.betTiger = state.totalBetTiger;
        this.betTie = state.totalBetTie;

        // console.log(this.room.state);
        this.currentHost = state.currentHostId;
        console.log(this.currentHost);

        const players = [...state.players.values()];

        this.updatePlayerList(players);
        console.log("PlayerStatus", players[0].isHost);
        this.TotalUser = players.length;
        this.gameState = state.roundState;
      });

      this.room.onLeave((code) => {
        console.log("Left room with code:", code);
      });
    } catch (e) {
      console.error("Error:", e);
    }
  }

  updatePlayerList(playerList: any[]) {
    let displayIndex = 0;
    const numElements = playerList.length;
    this.ListL.forEach((node) => {
      node.active = false;
    });
    for (let i = 0; i < numElements && displayIndex < this.ListL.length; i++) {
      if (
        playerList[i].sessionId !== this.room.sessionId &&
        playerList[i].sessionId !== this.currentHost
      ) {
        this.ListLabel[displayIndex].string = playerList[i].sessionId;
        this.ListL[displayIndex].active = true;
        displayIndex++;
        this.AudioController.onAudio(9);
      }
    }
    for (let i = displayIndex; i < this.ListL.length; i++) {
      this.ListL[i].active = false;
    }
  }

  private createSpriteNode(sessionId: string) {
    const spriteNode = instantiate(this.prfab);
    let v3 = new Vec3();
    let PosTarget;
    // Kiểm tra nếu sessionId trùng khớp với label nào đó
    for (let i = 0; i < this.ListLabel.length; i++) {
      if (sessionId === this.ListLabel[i].string) {
        // Thêm node mới làm con của node có label tương ứng
        if (this.UserBet === "Dragon") {
          PosTarget = this.DragonNode;
        } else if (this.UserBet === "Tiger") {
          PosTarget = this.TigerNode;
        } else {
          PosTarget = this.TieNode;
        }
        this.ListLabel[i].node.addChild(spriteNode);
        this.ListLabel[i].node.inverseTransformPoint(
          v3,
          PosTarget.worldPosition
        );
        tween(spriteNode)
          .to(0.3, { position: v3 })
          .call(() => {})
          .start();

        break; // Dừng vòng lặp sau khi thêm node
      }
    }
  }

  private PayoutAnim(winnerList) {
    if (winnerList.length > 0) {
      this.AudioController.onAudio(6);
    }

    // Lặp qua danh sách người chiến thắng và tạo nút trả tiền cho mỗi người chiến thắng
    for (let i = 0; i < winnerList.length; i++) {
      const winner = winnerList[i];

      // Tìm node tương ứng với người chiến thắng
      const winnerNode = this.findWinnerNode(winner);

      if (winnerNode) {
        let v3 = new Vec3();
        this.PayUser.inverseTransformPoint(v3, winnerNode.worldPosition);
        // Tạo nút trả tiền cho người chiến thắng
        this.createSpriteNodePay(v3.x, v3.y, this.PayUserSprite);
      }
    }
  }

  // Hàm để tìm node tương ứng với người chiến thắng
  private findWinnerNode(winnerName) {
    // Lặp qua danh sách nhãn để tìm node có tên trùng khớp với người chiến thắng
    for (let i = 0; i < this.ListLabel.length; i++) {
      if (winnerName === this.ListLabel[i].string) {
        return this.ListLabel[i].node;
      }
    }
    return null; // Trả về null nếu không tìm thấy node
  }

  createSpriteNodePay(posX, posY, spriteFrames: SpriteFrame[]) {
    // Lặp qua từng sprite frame để tạo node tương ứng
    for (let i = 0; i < spriteFrames.length; i++) {
      // Tạo một Node mới
      const spriteNode = new Node("SpriteNode");
      spriteNode.scale = new Vec3(0.5, 0.5);

      // Thêm một component Sprite vào Node
      const spriteComponent = spriteNode.addComponent(Sprite);

      // Gán SpriteFrame cho component Sprite dựa trên index
      spriteComponent.spriteFrame = spriteFrames[i];

      // Thêm Node vào Scene hiện tại (ví dụ: Node cha của tất cả Sprite)
      this.PayUser.addChild(spriteNode); // Giả sử winner.node là node của người chiến thắng

      // Tween Node đến vị trí mong muốn
      tween(spriteNode)
        .delay(i * 0.1) // thiết lập thời gian trễ dựa trên index của node
        .to(1, { position: new Vec3(posX, posY) })
        .call(() => {
          spriteNode.active = false;
        })
        .start();
    }
  }
}
