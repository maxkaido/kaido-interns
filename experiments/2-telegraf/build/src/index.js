"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const telegraf_1 = require("telegraf");
const Bot = function ({ botToken }) {
    this.bot = new telegraf_1.Telegraf(botToken);
    this.bot.telegram.getMe().then(console.log);
    this.bot.start((ctx) => ctx.reply("telegraf experiment"));
    this.bot.launch();
    return this;
};
exports.Bot = Bot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQW9DO0FBRXBDLE1BQU0sR0FBRyxHQUFHLFVBQXFCLEVBQUUsUUFBUSxFQUFPO0lBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFTyxrQkFBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbGVncmFmIH0gZnJvbSBcInRlbGVncmFmXCI7XG5cbmNvbnN0IEJvdCA9IGZ1bmN0aW9uICh0aGlzOiBhbnksIHsgYm90VG9rZW4gfTogYW55KSB7XG4gIHRoaXMuYm90ID0gbmV3IFRlbGVncmFmKGJvdFRva2VuKTtcbiAgdGhpcy5ib3QudGVsZWdyYW0uZ2V0TWUoKS50aGVuKGNvbnNvbGUubG9nKTtcbiAgdGhpcy5ib3Quc3RhcnQoKGN0eDogYW55KSA9PiBjdHgucmVwbHkoXCJ0ZWxlZ3JhZiBleHBlcmltZW50XCIpKTtcbiAgdGhpcy5ib3QubGF1bmNoKCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0IHsgQm90IH07XG4iXX0=