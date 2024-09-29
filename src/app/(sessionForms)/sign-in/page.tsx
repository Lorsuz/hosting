'use client';
import React, { useState } from 'react';
import InputText from '@component/forms/fields/InputText';
import Link from 'next/link';
import ContinueWith from '@component/buttons/ContinueWith';
import FormAccountButton from '@component/buttons/FormAccountButton';
import appRoutes from '@config/appRoutes.config';
const page = () => {
	return (
		<>
			<h1>Sign in</h1>
			<p>
				Log in securely to your hosting platform <br /> and get started.
			</p>
			<InputText type='email' name='password' placeholder='Email'></InputText>
			<InputText type='password' name='password' placeholder='Password'></InputText>
			<FormAccountButton contentButton='Login' type='submit'></FormAccountButton>
			<Link href={appRoutes.confirmPassword} className='forgot-password'>
				Forgot your password?
			</Link>
			<div className='hr'>
				<hr className='left' />
				<span>Or</span>
				<hr className='right' />
			</div>
			<ContinueWith></ContinueWith>
			<Link href={appRoutes.signUp} className='toggle-form'>
				Don&apos;t have an account yet? <span>Sign up</span>
			</Link>
		</>
	);
};

export default page;
