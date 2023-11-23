import {RepositoryQueryInterface} from "@/core/RepositoryQueryInterface";

export default class ProjectCRUDRepository implements RepositoryQueryInterface{
	async create(data: any) {
		try {
			return Promise.resolve({})
		}catch (e) {
			return Promise.reject(e)
		}
	}

	async delete(id: any) {
		try {
			return Promise.resolve(true)
		}catch (e) {
			return Promise.reject(e)
		}
	}

	async findAll() {
		try {
			return Promise.resolve([])
		}catch (e) {
			return Promise.resolve([])
		}
	}

	async findById(id: any) {
		try {
			return Promise.resolve({})
		}catch (e) {
			return Promise.resolve(null)
		}
	}

	async findByQuery(query: object) {
		try {
			return Promise.resolve([])
		}catch (e) {
			return Promise.resolve([])
		}
	}

	async read(id: any) {
		try {
			return Promise.resolve({})
		}catch (e) {
			return Promise.reject(e)
		}
	}

	async update(id: any, data: any) {
		try {
			return Promise.resolve({})
		}catch (e) {
			return Promise.reject(e)
		}
	}

}
