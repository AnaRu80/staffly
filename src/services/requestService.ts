import { Request, NewRequest } from '../types/Request';
import uuid from 'react-native-uuid';

let requests: Request[] = [
	{
		id: '1',
		type: 'Vacation',
		status: 'Approved',
		dateRange: {
			startDate: new Date('2025-04-10'),
			endDate: new Date('2025-04-15'),
		},
	},
	{
		id: '2',
		type: 'Sick Leave',
		status: 'Denied',
		dateRange: {
			startDate: new Date('2025-05-01'),
			endDate: new Date('2025-05-02'),
		},
	},
	{
		id: '3',
		type: 'Personal',
		status: 'Pending',
		dateRange: {
			startDate: new Date('2025-05-14'),
			endDate: new Date('2025-05-15'),
		},
	},
];

export const requestService = {
	getAll: async (): Promise<Request[]> => {
		return requests;
	},

	create: async (request: NewRequest): Promise<Request> => {
		try {
			const newRequest: Request = {
				id: uuid.v4(),
				...request,
				status: 'Pending',
			};
			requests.push(newRequest);
			return newRequest;
		} catch (error) {
			throw error;
		}
	},

	delete: async (id: string): Promise<void> => {
		requests = requests.filter(r => r.id !== id);
	},

	reset: async (): Promise<void> => {
		requests = [];
	},
};
