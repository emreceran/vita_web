# -*- coding: utf-8 -*-
{
    'name': "vita_web",
   

    'summary': "Short (1 phrase/line) summary of the module's purpose",

    'description': """
    Long description of module's purpose
    """,

    'author': "My Company",
    'website': "https://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'website', 'website_sale', 'vita_data', 'website_blog'],
    # 'assets': {
    #         'web.assets_frontend': [
    #             '/vita_header/static/src/css/header.css',
    #             '/vita_web/static/src/css/side_bar2.css',
    #             '/vita_web/static/src/css/other_services.css',
    #             '/vita_web/static/src/css/top_footer.css',
    #         ],
    #     },
    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
        'views/red_cards.xml',
        'views/product_list.xml',
        'views/products_item.xml',
        'views/sorular.xml',
        'views/product_categories.xml',
        'views/top_footer.xml',
        'views/blog_post.xml',
        'views/side.xml',
    ],
    
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}

