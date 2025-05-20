import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

type FormValues = {
	email: string;
	password: string;
};

export function useLoginForm() {
	const { login } = useAuth();

	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		setError,
	} = useForm<FormValues>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = ({ email, password }: FormValues) => {
		if (
			email.trim().toLowerCase() === 'a@a.com' &&
			password.trim().toLowerCase() === '1234'
		) {
			login();
		} else {
			setError('email', {
				type: 'manual',
				message: 'Incorrect email or password.',
			});
			setError('password', {
				type: 'manual',
				message: 'Incorrect email or password.',
			});
		}
	};

	return { control, handleSubmit: handleSubmit(onSubmit), errors, isValid };
}
