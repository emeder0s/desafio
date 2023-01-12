function checkDni(dni) {
        var msn = "";
        var validation = true;
        if (dni.length != 9 ){
            msn = "El DNI introducido es incorrecto";
            validation = false;
        }else{
            var letter = dni[dni.length - 1].toUpperCase();
            var num = dni.substring(0,8);
            if (num > "99999999") {
                msn = "El DNI introducido es incorrecto";
                validation=false;
            }
            else {
                var rest = num % 23;
                var letters = "TRWAGMYFPDXBNJZSQVHLCKET";
                var set = letters.charAt(rest);
                if (letter != set) {
                    msn = "El DNI introducido es incorrecto";
                    validation=false;
                }
            }
        } 
        return {validation,msn}
}

export default checkDni;