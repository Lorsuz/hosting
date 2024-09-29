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
			<h1>Sign up</h1>
			<p>
				Enlist now and access premium hosting solutions <br /> tailored for gaming, websites, and enterprise giants.
			</p>
			<InputText type='email' name='password' placeholder='Email'></InputText>
			<InputText type='password' name='password' placeholder='Password'></InputText>
			<InputText type='password' name='confirm-password' placeholder='Confirm password'></InputText>
			<FormAccountButton contentButton='Sign up' type='submit'></FormAccountButton>
			<div className='terms'>
				By clicking Sign Up, you agree to our <Link href='./terms'>Terms of Service</Link> and <Link href='./privacy'>Privacy Policy</Link>
			</div>
			<div className='hr'>
				<hr className='left' />
				<span>Or</span>
				<hr className='right' />
			</div>
			<ContinueWith></ContinueWith>
			<Link href={appRoutes.signIn} className='toggle-form'>
				Already have an account? <span>Sign in</span>
			</Link>
		</>
	);
};

export default page;
