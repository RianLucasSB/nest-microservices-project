"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const stock_controller_1 = require("./stock.controller");
const stock_service_1 = require("./stock.service");
const stock_schema_1 = require("./schemas/stock.schema");
let StockModule = class StockModule {
};
StockModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: stock_schema_1.Books.name, schema: stock_schema_1.BooksSchema }]),
        ],
        providers: [stock_service_1.StockService],
        controllers: [stock_controller_1.StockController],
    })
], StockModule);
exports.StockModule = StockModule;
//# sourceMappingURL=stock.module.js.map