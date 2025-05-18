import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLogin } from '../../services/userService';

const LoginPage = () => {
    const { mutate: login } = useLogin()

    const formik = useFormik({
        initialValues: {
            phone: '',
            password: '',
        },
        validateSchema: Yup.object({
            phone: Yup.string().required('Vui lòng nhập số điện thoại'),
            password: Yup.string().required('Vui lòng nhập mật khẩu'),
        }),
        onSubmit: (values) => {
            login(values)
        }
    })

    return (
        <section className='w-screen bg-[#f1f1f1] flex items-center justify-center'>
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={formik.handleSubmit}>
                <legend className="fieldset-legend">Đăng Nhập</legend>

                <label className="label">Số điện thoại</label>
                <input type="phone" className="input" placeholder="Số điện thoại..."
                    name="phone"
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <p>{formik.touched.fullName && Boolean(formik.errors.fullName)}</p>

                <label className="label">Mật Khẩu</label>
                <input type="password" className="input" placeholder="Mật khẩu..."
                    name="password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />

                <button type="submit" className="btn btn-neutral mt-4">Đăng Nhập</button>
            </form>
        </section>
    )
}

export default LoginPage
