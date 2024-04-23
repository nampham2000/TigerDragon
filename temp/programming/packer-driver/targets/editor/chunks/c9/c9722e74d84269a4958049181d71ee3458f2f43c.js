System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, Sprite, SpriteFrame, tween, Vec3, Colyseus, AudioController, Chip, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, NetworkConnect;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfColyseus(extras) {
    _reporterNs.report("Colyseus", "db://colyseus-sdk/colyseus.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioController(extras) {
    _reporterNs.report("AudioController", "./AudioController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChip(extras) {
    _reporterNs.report("Chip", "./Chip", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Colyseus = _unresolved_2.default;
    }, function (_unresolved_3) {
      AudioController = _unresolved_3.AudioController;
    }, function (_unresolved_4) {
      Chip = _unresolved_4.Chip;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9288fCnqNOx7X/4BfkUyJf", "NetworkConnect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite', 'SpriteFrame', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NetworkConnect", NetworkConnect = (_dec = ccclass("NetworkConnect"), _dec2 = property({
        type: String
      }), _dec3 = property({
        type: Number
      }), _dec4 = property({
        type: Boolean
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Label
      }), _dec7 = property(Label), _dec8 = property({
        type: _crd && Chip === void 0 ? (_reportPossibleCrUseOfChip({
          error: Error()
        }), Chip) : Chip
      }), _dec9 = property({
        type: Prefab
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: _crd && AudioController === void 0 ? (_reportPossibleCrUseOfAudioController({
          error: Error()
        }), AudioController) : AudioController
      }), _dec15 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = class NetworkConnect extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "hostname", _descriptor, this);

          _initializerDefineProperty(this, "port", _descriptor2, this);

          _initializerDefineProperty(this, "useSSL", _descriptor3, this);

          _initializerDefineProperty(this, "ListL", _descriptor4, this);

          _initializerDefineProperty(this, "ListLabel", _descriptor5, this);

          _initializerDefineProperty(this, "TimerDown", _descriptor6, this);

          _initializerDefineProperty(this, "chipNode", _descriptor7, this);

          _initializerDefineProperty(this, "prfab", _descriptor8, this);

          _initializerDefineProperty(this, "DragonNode", _descriptor9, this);

          _initializerDefineProperty(this, "TigerNode", _descriptor10, this);

          _initializerDefineProperty(this, "TieNode", _descriptor11, this);

          _initializerDefineProperty(this, "PayUser", _descriptor12, this);

          this.client = void 0;
          this.room = void 0;
          this.gameState = void 0;
          this.resultDragon = 0;
          this.resultTiger = 0;
          this.TotalUser = void 0;
          this.UserBet = void 0;
          this.NotmeBet = void 0;
          this.result = void 0;
          this.winner = void 0;
          this.currentHost = void 0;
          this.balanceUser = void 0;
          this.TotalBalanceUser = void 0;
          this.betDragon = void 0;
          this.betTiger = void 0;
          this.betTie = void 0;

          _initializerDefineProperty(this, "AudioController", _descriptor13, this);

          _initializerDefineProperty(this, "PayUserSprite", _descriptor14, this);
        }

        start() {
          this.client = new (_crd && Colyseus === void 0 ? (_reportPossibleCrUseOfColyseus({
            error: Error()
          }), Colyseus) : Colyseus).Client(`${this.useSSL ? "wss" : "ws"}://${this.hostname}:${this.port}`);
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
              console.log("Joined existing room with sessionId:", this.room.sessionId);
            }

            console.log("Joined successfully!");
            console.log("User's sessionId:", this.room.sessionId);
            this.room.onMessage("timer", message => {
              this.TimerDown.string = message;

              if (message < 30 && message > 0) {
                this.AudioController.onAudio(3);
              }

              if (message === 0) {
                this.AudioController.onAudio(4);
              }
            });
            this.room.onMessage("winnerList", message => {
              console.log("WinList", message); // this.winner=message;

              this.PayoutAnim(message);
            });
            this.room.onMessage("result", message => {
              console.log(message.result);
              console.log("rong", message.dragonCard.value);
              console.log("ho", message.tigerCard.value);
              this.result = message.result;
            });
            this.room.onMessage("userBet", message => {
              if (message.playerID !== this.room.sessionId) {
                console.log("message", message);
                this.UserBet = message.betType;
                this.createSpriteNode(message.playerID);
              } else {
                console.log("false");
              }
            });
            this.room.onMessage("balance", message => {
              this.balanceUser = message.balance;
              console.log(message);
            });
            setInterval(() => {
              this.room.send("getBalance");
            }, 1000);
            this.room.onStateChange(state => {
              console.log("Room state changed:", state);
              console.log("onStateChange: ", state);
              console.log(state.roundState);
              this.betDragon = state.totalBetDragon;
              this.betTiger = state.totalBetTiger;
              this.betTie = state.totalBetTie; // console.log(this.room.state);

              this.currentHost = state.currentHostId;
              console.log(this.currentHost);
              const players = [...state.players.values()];
              this.updatePlayerList(players);
              console.log("PlayerStatus", players[0].isHost);
              this.TotalUser = players.length;
              this.gameState = state.roundState;
            });
            this.room.onLeave(code => {
              console.log("Left room with code:", code);
            });
          } catch (e) {
            console.error("Error:", e);
          }
        }

        updatePlayerList(playerList) {
          let displayIndex = 0;
          const numElements = playerList.length;
          this.ListL.forEach(node => {
            node.active = false;
          });

          for (let i = 0; i < numElements && displayIndex < this.ListL.length; i++) {
            if (playerList[i].sessionId !== this.room.sessionId && playerList[i].sessionId !== this.currentHost) {
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

        createSpriteNode(sessionId) {
          const spriteNode = instantiate(this.prfab);
          let v3 = new Vec3();
          let PosTarget; // Kiểm tra nếu sessionId trùng khớp với label nào đó

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
              this.ListLabel[i].node.inverseTransformPoint(v3, PosTarget.worldPosition);
              tween(spriteNode).to(0.3, {
                position: v3
              }).call(() => {}).start();
              break; // Dừng vòng lặp sau khi thêm node
            }
          }
        }

        PayoutAnim(winnerList) {
          if (winnerList.length > 0) {
            this.AudioController.onAudio(6);
          } // Lặp qua danh sách người chiến thắng và tạo nút trả tiền cho mỗi người chiến thắng


          for (let i = 0; i < winnerList.length; i++) {
            const winner = winnerList[i]; // Tìm node tương ứng với người chiến thắng

            const winnerNode = this.findWinnerNode(winner);

            if (winnerNode) {
              let v3 = new Vec3();
              this.PayUser.inverseTransformPoint(v3, winnerNode.worldPosition); // Tạo nút trả tiền cho người chiến thắng

              this.createSpriteNodePay(v3.x, v3.y, this.PayUserSprite);
            }
          }
        } // Hàm để tìm node tương ứng với người chiến thắng


        findWinnerNode(winnerName) {
          // Lặp qua danh sách nhãn để tìm node có tên trùng khớp với người chiến thắng
          for (let i = 0; i < this.ListLabel.length; i++) {
            if (winnerName === this.ListLabel[i].string) {
              return this.ListLabel[i].node;
            }
          }

          return null; // Trả về null nếu không tìm thấy node
        }

        createSpriteNodePay(posX, posY, spriteFrames) {
          // Lặp qua từng sprite frame để tạo node tương ứng
          for (let i = 0; i < spriteFrames.length; i++) {
            // Tạo một Node mới
            const spriteNode = new Node("SpriteNode");
            spriteNode.scale = new Vec3(0.5, 0.5); // Thêm một component Sprite vào Node

            const spriteComponent = spriteNode.addComponent(Sprite); // Gán SpriteFrame cho component Sprite dựa trên index

            spriteComponent.spriteFrame = spriteFrames[i]; // Thêm Node vào Scene hiện tại (ví dụ: Node cha của tất cả Sprite)

            this.PayUser.addChild(spriteNode); // Giả sử winner.node là node của người chiến thắng
            // Tween Node đến vị trí mong muốn

            tween(spriteNode).delay(i * 0.1) // thiết lập thời gian trễ dựa trên index của node
            .to(1, {
              position: new Vec3(posX, posY)
            }).call(() => {
              spriteNode.active = false;
            }).start();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hostname", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "localhost";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "port", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 80;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useSSL", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ListL", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ListLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "TimerDown", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "chipNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prfab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "DragonNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "TigerNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "TieNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "PayUser", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "AudioController", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "PayUserSprite", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9722e74d84269a4958049181d71ee3458f2f43c.js.map