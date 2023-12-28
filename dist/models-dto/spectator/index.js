"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./current-game-info.dto"), exports);
__exportStar(require("./current-game-participant.dto"), exports);
__exportStar(require("./featured-game-info.dto"), exports);
__exportStar(require("./featured-games.dto"), exports);
__exportStar(require("./game-customization-object.dto"), exports);
__exportStar(require("./observer.dto"), exports);
__exportStar(require("./participant.dto"), exports);
__exportStar(require("./perks.dto"), exports);
__exportStar(require("./spectator-not-available.dto"), exports);