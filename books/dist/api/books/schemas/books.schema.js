"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksSchema = exports.Books = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Books = class Books {
};
__decorate([
    (0, mongoose_1.Prop)({ type: 'String' }),
    __metadata("design:type", String)
], Books.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'String' }),
    __metadata("design:type", Number)
], Books.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)({ name: 'image_url', type: 'String' }),
    __metadata("design:type", String)
], Books.prototype, "imageUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ name: 'quantity', type: 'Number' }),
    __metadata("design:type", Number)
], Books.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Books.prototype, "timestamps", void 0);
Books = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    })
], Books);
exports.Books = Books;
exports.BooksSchema = mongoose_1.SchemaFactory.createForClass(Books);
//# sourceMappingURL=books.schema.js.map