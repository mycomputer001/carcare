drop table users,register cascade;

create table users(
  user_id text not null unique,
  user_username text not null unique,
  primary key (user_id)
);

create table register(
  customer_id serial,
  customer_username text not null unique,
  customer_password text not null,
  customer_name text not null,
  customer_surname text not null,
  phone text not null,
  email text not null unique,
  primary key (customer_id)
)
