'use client';
import React from 'react';
import InputText from '@component/forms/fields/InputText';
import FormAccountButton from '@component/buttons/FormAccountButton';
import Link from 'next/link';
import appRoutes from '@config/appRoutes.config';

const page = () => {
	return (
		<>
			<h1>Reset password</h1>
			<p>Rest assured we’re here to help!</p>
			<InputText type='text' name='code' placeholder='Email adress'></InputText>
			<FormAccountButton contentButton='Send' type='submit'></FormAccountButton>
			<Link href={appRoutes.signUp} className='forgot-password'>
				Don&apos;t have an account yet? <span>Sign up</span>
			</Link>
		</>
	);
};

export default page;
