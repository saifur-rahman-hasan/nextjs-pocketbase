import db from "@/db";
import {RecordModel, RecordService} from "pocketbase";

export default class ProjectModel {
	public collection: RecordService<RecordModel>;

	constructor() {
		this.collection = db.client.collection('projects')
	}

}