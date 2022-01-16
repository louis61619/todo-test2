create table if not exists todolist (
	id INT primary key AUTO_INCREMENT, 
	title varchar(20), 
	description varchar(512)
);

# new
insert into todolist (title, description) values ("It's a title", "It's a description");