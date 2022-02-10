drop table customers, reserves, employees cascade;

create table customers (
  customer_id text not null unique,
  customer_username text not null unique,
  customer_password text not null,
  customer_name text not null,
  customer_surname text not null,
  customer_phone_number text not null,
  customer_email text not null unique,
  primary key (customer_id)
);

create table reserves (
  reserve_id serial,
  reserve_brand text not null,
  reserve_model text not null,
  reserve_license text not null,
  reserve_phone_number text not null,
  reserve_service text not null,
  reserve_date timestamp with time zone,
  reserve_now timestamp not null default now(),
  primary key (reserve_id)
);

create table employees (
  employee_id serial,
  employee_name text not null,
  employee_surname text not null,
  employee_phone_number text not null,
  employee_birthdate date,
  employee_salary integer not null,
  employee_address text not null,
  primary key (employee_id)
);
