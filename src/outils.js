export const outils = {
    methods : {
        getMembre(id) {
            for(var i= 0; i < this.$store.state.membres.length; i++)
            {
                let membre = this.$store.state.membres[i];
                if(id == membre.id){
                    return membre;
                  /*  console.log(membre)*/
                }
            }

        }
    }
}