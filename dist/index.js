"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const PORT = process.env.PORT || 3001;
server_1.default.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
//# sourceMappingURL=index.js.map