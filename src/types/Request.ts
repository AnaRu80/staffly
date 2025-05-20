export type Request = {
	id: string;
	type: 'Vacation' | 'Sick Leave' | 'Personal' | 'Unpaid';
	dateRange: {
		startDate: Date;
		endDate: Date;
	};
	status: 'Pending' | 'Approved' | 'Denied';
};
export type NewRequest = Omit<Request, 'id' | 'status'>;

export type FormValues = {
	type: NewRequest['type'] | '';
	dateRange: {
		startDate: Date | undefined;
		endDate: Date | undefined;
	};
};
