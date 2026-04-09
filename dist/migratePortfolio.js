"use strict";
/** @format */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// scripts/migratePortfolio.ts
var educationModel_1 = __importDefault(require("@/lib/database/models/educationModel"));
var experienceModel_1 = __importDefault(require("@/lib/database/models/experienceModel"));
var projectModel_1 = __importDefault(require("@/lib/database/models/projectModel"));
var mongoose_1 = __importDefault(require("mongoose"));
function migrateProjects() {
    return __awaiter(this, void 0, void 0, function () {
        var projects, _i, projects_1, project, updates;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, projectModel_1.default.find({})];
                case 1:
                    projects = _a.sent();
                    _i = 0, projects_1 = projects;
                    _a.label = 2;
                case 2:
                    if (!(_i < projects_1.length)) return [3 /*break*/, 5];
                    project = projects_1[_i];
                    updates = {};
                    // Add new fields with defaults
                    if (!project.projectType)
                        updates.projectType = "Personal";
                    if (!project.status)
                        updates.status = "Completed";
                    if (!project.myRole)
                        updates.myRole = "Developer";
                    // Transform existing fields if needed
                    // For example, move technologies to tags
                    if (project.technologies && !project.tags) {
                        updates.tags = project.technologies;
                    }
                    if (!(Object.keys(updates).length > 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, projectModel_1.default.updateOne({ _id: project._id }, { $set: updates })];
                case 3:
                    _a.sent();
                    console.log("Updated project: ".concat(project.title));
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function migrateExperiences() {
    return __awaiter(this, void 0, void 0, function () {
        var experiences, _i, experiences_1, exp, updates;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, experienceModel_1.default.find({})];
                case 1:
                    experiences = _a.sent();
                    _i = 0, experiences_1 = experiences;
                    _a.label = 2;
                case 2:
                    if (!(_i < experiences_1.length)) return [3 /*break*/, 5];
                    exp = experiences_1[_i];
                    updates = {};
                    if (!exp.achievements)
                        updates.achievements = [];
                    if (!exp.techStack && exp.skills)
                        updates.techStack = exp.skills;
                    if (!(Object.keys(updates).length > 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, experienceModel_1.default.updateOne({ _id: exp._id }, { $set: updates })];
                case 3:
                    _a.sent();
                    console.log("Updated experience: ".concat(exp.role, " at ").concat(exp.company));
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function migrateEducation() {
    return __awaiter(this, void 0, void 0, function () {
        var education, _i, education_1, edu, updates;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, educationModel_1.default.find({})];
                case 1:
                    education = _a.sent();
                    _i = 0, education_1 = education;
                    _a.label = 2;
                case 2:
                    if (!(_i < education_1.length)) return [3 /*break*/, 5];
                    edu = education_1[_i];
                    updates = {};
                    // Fix typo fields if they exist
                    if (edu.qaulification && !edu.qualification) {
                        updates.qualification = edu.qaulification;
                    }
                    if (edu.collage && !edu.college) {
                        updates.college = edu.collage;
                    }
                    // Add new fields
                    if (edu.currentlyStudying === undefined) {
                        updates.currentlyStudying = edu.endDate ? false : true;
                    }
                    if (!(Object.keys(updates).length > 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, educationModel_1.default.updateOne({ _id: edu._id }, { $set: updates })];
                case 3:
                    _a.sent();
                    console.log("Updated education: ".concat(edu.qaulification || edu.qualification));
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// Run migrations
function runMigrations() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, 6, 8]);
                    return [4 /*yield*/, mongoose_1.default.connect(process.env.MONGODB_URI)];
                case 1:
                    _a.sent();
                    console.log("Connected to MongoDB");
                    return [4 /*yield*/, migrateProjects()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, migrateExperiences()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, migrateEducation()];
                case 4:
                    _a.sent();
                    console.log("Migrations completed!");
                    return [3 /*break*/, 8];
                case 5:
                    error_1 = _a.sent();
                    console.error("Migration failed:", error_1);
                    return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, mongoose_1.default.disconnect()];
                case 7:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    });
}
runMigrations();
