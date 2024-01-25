"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const error_handler_1 = __importDefault(require("error-handler"));
const router_1 = __importDefault(require("./router"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
dotenv_1.default.config();
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});
app.use('/api', router_1.default);
app.get('/', (req, res) => {
    res.send('HELLO WORLD');
});
if (process.env.NODE_ENV === 'development') {
    app.use((0, error_handler_1.default)());
}
exports.default = app;
//# sourceMappingURL=server.js.map