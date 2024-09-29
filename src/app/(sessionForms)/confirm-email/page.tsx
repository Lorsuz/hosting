'use client'
import React from 'react';
import InputText from '@component/forms/fields/InputText';
import FormAccountButton from '@component/buttons/FormAccountButton';
import Link from 'next/link';
import appRoutes from '@config/appRoutes.config';

const page = () => {
	return (
		<form>
			<h1>Confirm email</h1>
			<p>Check your inbox to confirm.</p>
			<InputText type='text' name='code' placeholder='Code'></InputText>
			<FormAccountButton contentButton='Send' type='submit'></FormAccountButton>
			<Link href={appRoutes.signUp} className='forgot-password'>
				Don&apos;t have an account yet? <span>Sign up</span>
			</Link>
			
		</form>
	);
};

export default page;
