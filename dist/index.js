"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
            }
        });
        console.log(res);
    });
}
function updateInfo(email, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: { email },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
function getUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany({
            // where:{email},
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true
                // Add other necessary fields, but exclude 'password'
            },
        });
        console.log(res);
    });
}
function deleteUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.delete({
            where: { email },
        });
        console.log(res);
    });
}
// insertUser("prakhar09@gmail.com", "prakhar", "sinha","123456")
// updateInfo("prakhar@gmail.com","prakharr","sinhaa")
getUserDetails();
// deleteUser("prakhar@gmail.com")
