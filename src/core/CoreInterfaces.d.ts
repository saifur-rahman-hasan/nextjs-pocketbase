import {initPocketBase} from "@/db";

interface CRUDApiMethods {
	index(): any
	store(): any;
	show(id: any): any;
	update(id: any): any;
	delete(id: any): any;
}