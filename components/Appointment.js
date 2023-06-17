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
    phone: yup.string().nullable(),
    service: yup.string().required(),
    problem: yup.string().nullable(),
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
      label: service.replace(/_/g, " ").toLowerCase(),
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
              <Controller
                control={control}
                render={({ field: { onChange, value, name, ref } }) => (
                  <Select
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
            <textarea
              {...register("problem")}
              className={
                errors.problem &&
                errors.problem?.message &&
                "!outline-2 !outline-red-400"
              }
              name="problem"
              placeholder="Napišite malo više o problemu koji imate sa Vašim autom"
            ></textarea>
          </div>
          <button className="button" type="submit" disabled={isSubmitting}>
            Zakažite termin
          </button>
        </div>
      </div>
    </form>
  );
}

export default Appointment;
