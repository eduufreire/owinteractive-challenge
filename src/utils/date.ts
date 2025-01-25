import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export class DateParse {
	private constructor() {}

	static getDateNow(): Date {
		const now = dayjs().format("YYYY-MM-DDTHH:mm:ss+00:00");
		return new Date(now);
	}

	static formatDate(date: Date, time = true): string {
		const templateFormat = "YYYY-MM-DD HH:mm:ss";
		return dayjs(date)
			.utc()
			.format(time ? templateFormat : "YYYY-MM-DD");
	}
}
