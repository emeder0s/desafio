#DROP DATABASE desafio;
CREATE DATABASE IF NOT EXISTS desafio;
USE desafio;

CREATE TABLE IF NOT EXISTS tipo_documentos(
        id INT AUTO_INCREMENT,
		tipo_documento_ext VARCHAR(30),
        tipo_documento_short VARCHAR(10),
        
        PRIMARY KEY(id)
);
    
CREATE TABLE IF NOT EXISTS users(
        id INT AUTO_INCREMENT,
        user_rol VARCHAR(10),
        contraseña VARCHAR (18),
        fecha_alta DATETIME,
        nombre VARCHAR(20), 
        apellido_1 VARCHAR(20), 
        apellido_2 VARCHAR (20),
        fecha_nac DATE,
        tipo_doc INT ,
        num_doc CHAR(10),
        sexo VARCHAR(20),
        telefono INT,
        idioma_com VARCHAR(20),
        email VARCHAR(50),
        acepta_envio_comunic TINYINT,
        tipo_via VARCHAR(12),
        direccion VARCHAR(12),
        numero INT,
        piso INT,
        dir_info_adicional VARCHAR(30),
        cp INT,
        provincia VARCHAR(20),
        localidad VARCHAR(20),
        nivel_estudios VARCHAR(20),
        titulo_principal VARCHAR(20),
        situacion_actual VARCHAR(20),
        profesion_actual VARCHAR(30),
        int_area_organizacion INT,
        int_area_internacional INT,
        int_area_redes_social INT,
        int_area_empleo INT,
        int_area_inc_social INT,
        int_area_med_ambiente INT,
        int_area_salud INT,
        int_area_socorros INT,
        preca_labol_in TINYINT,
        discap_in TINYINT,
        problem_salud_in TINYINT,
        general_in TINYINT,
        infancia_in TINYINT,
        inmigrantes_in TINYINT,
        jovenes_in TINYINT,
        mayores_in TINYINT,
        mujeres_in TINYINT,
        otros_in TINYINT,
        reclusos_in TINYINT,
        refugiados_in TINYINT,
        vulnerables_in TINYINT,
        int_act_traslado INT,
        int_act_apoyo INT,
        int_act_alojamiento INT,
        int_act_donaciones INT,
        int_act_repartir INT,
        int_act_informar INT,
        int_act_acc_comunicacion INT,
        int_act_compania INT,
		int_act_rehab_medio INT,
		int_act_trabajo_red INT,
        int_act_orientar INT,
		int_act_enseñar INT,
        idioma VARCHAR(15),
        disponibilidad VARCHAR(30),
        horario VARCHAR(30),
        otras_habilidades INT,
        
        PRIMARY KEY(id),
        FOREIGN KEY (tipo_doc) REFERENCES tipo_documentos(id)
);
    
CREATE TABLE IF NOT EXISTS idiomas(
        id INT AUTO_INCREMENT,
		idioma VARCHAR(30),
        
        PRIMARY KEY(id)
);
    
CREATE TABLE IF NOT EXISTS user_idioma(
        id INT AUTO_INCREMENT,
		fk_id_usuario INT,
        fk_id_idioma INT,
        nivel VARCHAR(10),
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_usuario) REFERENCES users(id),
        FOREIGN KEY (fk_id_idioma) REFERENCES idiomas(id)
);

CREATE TABLE IF NOT EXISTS condu(
        id INT AUTO_INCREMENT,
        carnet_condu VARCHAR(8),
        
        PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS user_condu(
        id INT AUTO_INCREMENT,
		fk_id_usuario INT,
        fk_id_condu INT,
        nivel VARCHAR(10),
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_usuario) REFERENCES users(id),
        FOREIGN KEY (fk_id_condu) REFERENCES condu(id)
);

CREATE TABLE IF NOT EXISTS modalidades(
        id INT AUTO_INCREMENT,
        nombre VARCHAR(13),
        
        PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS tematicas(
        id INT AUTO_INCREMENT,
        nombre VARCHAR(16),
        
        PRIMARY KEY(id)
); 

CREATE TABLE IF NOT EXISTS colectivos(
        id INT AUTO_INCREMENT,
        nombre VARCHAR(48),
        
        PRIMARY KEY(id)
);   


CREATE TABLE IF NOT EXISTS tipos_actividades(
        id INT AUTO_INCREMENT,
        nombre VARCHAR(56),
        
        PRIMARY KEY(id)
); 

CREATE TABLE IF NOT EXISTS comunidades_autonomas(
        id INT AUTO_INCREMENT,
        nombre VARCHAR(26),
        
        PRIMARY KEY(id)
);     

CREATE TABLE IF NOT EXISTS actividades(
        id INT AUTO_INCREMENT,
        categoria VARCHAR(12),
        fecha_ini DATETIME,
		fecha_fin DATETIME,
        fk_id_modalidad INT,
        fk_id_tematica INT,
        fk_id_colectivo INT,
        fk_id_tipo_actividad INT,
        fk_id_comunidad_autonoma INT,
        provincia VARCHAR(30),
        municipio VARCHAR(30),
        nombre_actividades VARCHAR(80),
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_modalidad) REFERENCES modalidades(id),
        FOREIGN KEY (fk_id_tematica) REFERENCES tematicas(id),
        FOREIGN KEY (fk_id_colectivo) REFERENCES colectivos(id),
        FOREIGN KEY (fk_id_tipo_actividad) REFERENCES tipos_actividades(id),
        FOREIGN KEY (fk_id_comunidad_autonoma) REFERENCES comunidades_autonomas(id)
); 

CREATE TABLE IF NOT EXISTS valoraciones(
        id INT AUTO_INCREMENT,
		valoracion INT,
        fk_id_user INT,
        fk_id_actividad INT,
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_user) REFERENCES users(id),
        FOREIGN KEY (fk_id_actividad) REFERENCES actividades(id)

); 