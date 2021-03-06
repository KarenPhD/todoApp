import React, {useContext} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import TextError from './TextError';
import {Context} from '../context/todoContext'

const TodoInput = ({setToggleHide}) => {
    const {addTodoItem} = useContext(Context);

    const initialValues = {
        task: '',
        endDate: ''
    };

    const onSubmit = (values) => {
        addTodoItem(values);
        setToggleHide(false)
    };

    const validationSchema = yup.object({
        task: yup
            .string()
            .min(4, "Should contain at least 4 characters")
            .required('Required!'),
        endDate: yup
            .string()
            .when('task', {
                is: value => value && value.length > 0,
                then: yup
                .string()
                .required('Required!')
                .matches(
                    /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/,
                    "The Date format is dd/mm/yyyy. Since 01/01/1900."
                ),
                otherwise: yup.string()
            })
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
                <div className="form-row d-flex">
                    <div className="form-group col-md-2">
                        <label htmlFor="task">*Task</label>
                        <Field
                            type="text"
                            id="task"
                            className="form-control"
                            name="task"
                        />
                        <ErrorMessage name="task" component={TextError}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="endDate">*End Date</label>
                        <Field
                            type="text"
                            id="endDate"
                            className="form-control"
                            name="endDate"
                        />
                        <ErrorMessage name="endDate" component={TextError}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary mb-25" id="formBtn">Add</button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
};

export default TodoInput





