"use client";

import { useCallback } from 'react';
import Input from "./Input";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Services } from "@prisma/client";
import Select from "react-select";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().nullable(),
    phone: yup.string().required(),
    service: yup.string().required(),
    problem: yup.string().required(),
  })
  .required();

function Appointment() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, defaultValues },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mapOptions = Object.keys(Services).map((service) => {
    return {
      label: service.replace(/_/g, " "),
      value: service,
    };
  });

  const options = mapOptions;

  const onSubmit = useCallback(async (data) => {
    console.log(data);
    const res = await fetch(`/api/register`, {
      body: JSON.stringify(data),
      method: "POST",
    });

    if (res.ok) {
      reset({
        email: null,
        name: null,
        phone: null,
        problem: null,
        service: null,
      });
    }
  });


  return (
    <form
      className="Appointment"
      id="book_an_apointment"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="container">
        <div className="Appointment-form">
          <h4 className="Appointment-form-title">Zakažite termin</h4>
          <div className="Appointment-form-content">
            <Input
              placeholder="Ime i prezime"
              name="name"
              {...register("name")}
              className={
                errors.name &&
                errors.name?.message &&
                "!outline-2 !outline-red-400"
              }
            />
            <Input
              placeholder="Email"
              name="email"
              {...register("email")}
              className={
                errors.email &&
                errors.email?.message &&
                "!outline-2 !outline-red-400"
              }
            />
            <Input
              placeholder="Broj telefona"
              name="phone"
              {...register("phone")}
              className={
                errors.phone &&
                errors.phone?.message &&
                "!outline-2 !outline-red-400"
              }
            />
            <div className="mt-[22px] w-full md:w-[224px]">
              <div className={
                errors.service &&
                errors.service?.message &&
                "!border-2 !border-red-400"
              }>
                <Controller
                  control={control}
                  render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 0,
                          height: 48,
                          backgroundColor: '#f5f5f5',
                          borderStyle: 'none',
                        }),
                      }}
                      instanceId='select'
                      inputRef={ref}
                      value={options.find((c) => c.value === value) ?? null}
                      name={name}
                      options={options}
                      onChange={(selectedOption) => {
                        onChange(selectedOption.value);
                      }}
                    />
                  )}
                  name="service"
                />
              </div>
            </div>
            <textarea
              {...register("problem")}
              className={
                errors.problem &&
                errors.problem?.message &&
                "!outline-2 !outline-red-400"
              }
              name="problem"
              placeholder="Napišite malo više o problemu koji imate sa Vašim automobilom"
            ></textarea>
          </div>
          <button className="button" type="submit" disabled={isSubmitting}>
            Zakažite termin
          </button>
          <p className='mt-5 font-bold'>Nakon poslanog zahtjeva za servis, u vrlo kratkom roku očekujte email sa daljim uputstvima. </p>
        </div>
      </div>
    </form>
  );
}

export default Appointment;
