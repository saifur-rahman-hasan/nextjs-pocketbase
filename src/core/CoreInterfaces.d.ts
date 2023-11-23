import {initPocketBase} from "@/db";

interface CRUDApiMethods {
	index(): any
	create(): any;
	show(): any;
	update(): any;
	delete(): any;
}