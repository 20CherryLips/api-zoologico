CREATE TABLE mamifero (id SERIAL NOT NULL PRIMARY KEY, 
					 nome VARCHAR(50) NOT NULL, 
					 idade INT, 
					 genero VARCHAR(12) NOT NULL, 
					 raca VARCHAR(35)); 
					 
CREATE TABLE ave (id SERIAL NOT NULL PRIMARY KEY, 
					 nome VARCHAR(50) NOT NULL, 
					 idade INT, 
					 genero VARCHAR(12) NOT NULL, 
					 envergadura FLOAT); 
					 
CREATE TABLE reptil (id SERIAL NOT NULL PRIMARY KEY, 
					 nome VARCHAR(50) NOT NULL, 
					 idade INT, 
					 genero VARCHAR(12) NOT NULL, 
					 tipo_de_escamas VARCHAR(50)); 
					 
INSERT INTO mamifero(nome, idade, genero, raca)
	VALUES
('Simba', 2, 'Macho', 'Leão'),
('Timão', 1, 'Macho', 'Suricato'),
('Pumba', 10, 'Macho', 'Javali'),
('Nala', 3, 'Femea', 'Leoa');			 
					 
INSERT INTO ave (nome, idade, genero, envergadura)
	VALUES
('Zazu', 3, 'Macho', '20'),
('Iago', 5, 'Macho', '30'),
('Scuttle', 2, 'Macho', '40');

INSERT INTO reptil(nome, idade, genero, tipo_de_escamas)
	VALUES
('Pascal', 4, 'Macho', 'Escamas Dérminas'),
('Crush', 50, 'Macho', 'Escudos'),
('Kaa', 8, 'Fêmea', 'Escamas Quilíferas');

-- ALTER TABLE reptil
-- ALTER COLUMN tipo_de_escamas TYPE VARCHAR(50);

-- SELECT * FROM reptil;
-- SELECT * FROM ave;
-- SELECT * FROM mamifero;
					 
INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)
	VALUES
('hsgdbdmdndbcn', 188, 'jdjdnncn', 'hshsbshh');

SELECT * FROM reptil;

DELETE FROM reptil WHERE id=8;