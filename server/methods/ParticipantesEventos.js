Meteor.methods({
  insertParticipanteEventos: function (participanteEventos, evento) {
    	var e = Eventos.findOne({_id: evento});
    	var c = e.con + 1;
    	participanteEventos.con = Number(c);
    	ParticipanteEventos.insert(participanteEventos);
    	Eventos.update({_id: evento}, {$set:{con: Number(c)}})
  },
});







