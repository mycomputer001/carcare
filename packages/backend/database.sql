create table users(
  user_id text not null unique,
  user_username text not null unique,
  primary key (user_id)
)
