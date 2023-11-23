export interface RepositoryQueryInterface {
	// Define execute as an abstract method
	create(data: any): any;
	read(id: any): any;
	update(id: any, data: any): any;
	delete(id: any): any;

	findAll(): any
	findById(id: any): any;
	findByQuery(query: object): any;
}