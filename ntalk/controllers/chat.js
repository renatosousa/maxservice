module.exports = function(app) {
	var ChatController = {
		index: function(request, response) {
			var params = {usuario: request.session.usuario};
			response.render('chat/index', params);
		}
	};
	return ChatController;
};