drop table customers, reserves, employees cascade;
drop type if exists t_cleaning_status;

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

create type t_cleaning_status as enum (
  'waiting', 'cleaning', 'done'
);

create table reserves (
  reserve_id serial,
  reserve_brand text not null,
  reserve_model text not null,
  reserve_license text not null,
  reserve_phone_number text not null,
  reserve_service text not null,
  reserve_price text not null,
  reserve_done t_cleaning_status not null default 'waiting',
  reserve_date timestamp not null default now(),
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
