# -*- coding: utf-8 -*-
# from odoo import http


# class VitaWeb(http.Controller):
#     @http.route('/vita_web/vita_web', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/vita_web/vita_web/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('vita_web.listing', {
#             'root': '/vita_web/vita_web',
#             'objects': http.request.env['vita_web.vita_web'].search([]),
#         })

#     @http.route('/vita_web/vita_web/objects/<model("vita_web.vita_web"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('vita_web.object', {
#             'object': obj
#         })

