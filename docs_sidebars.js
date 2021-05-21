module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'index',
        },
        {
            'go-storage': [
                'go-storage/index',
                'go-storage/handling-errors',
                {
                    'Operations': [
                        'go-storage/operations/index',
                        {
                            'Servicer': [
                                'go-storage/operations/servicer/index',
                                'go-storage/operations/servicer/create',
                                'go-storage/operations/servicer/get',
                                'go-storage/operations/servicer/delete',
                                'go-storage/operations/servicer/list'
                            ]
                        },
                        {
                            'Storager': [
                                'go-storage/operations/storager/index',
                                'go-storage/operations/storager/metadata',
                                'go-storage/operations/storager/stat',
                                'go-storage/operations/storager/read',
                                'go-storage/operations/storager/write',
                                'go-storage/operations/storager/delete'
                            ]
                        },
                        'go-storage/operations/copy',
                        'go-storage/operations/move',
                        'go-storage/operations/reach',
                        'go-storage/operations/fetch',
                        {
                            'Appender': [
                                'go-storage/operations/appender/index',
                                'go-storage/operations/appender/create_append',
                                'go-storage/operations/appender/write_append',
                                'go-storage/operations/appender/commit_append',
                            ]
                        },
                        {
                            'Blocker': [
                                'go-storage/operations/blocker/index',
                                'go-storage/operations/blocker/combine_block',
                                'go-storage/operations/blocker/create_block',
                                'go-storage/operations/blocker/list_block',
                                'go-storage/operations/blocker/write_block',
                            ]
                        },
                        {
                            'Multiparter': [
                                'go-storage/operations/multiparter/index',
                                'go-storage/operations/multiparter/complete_multipart',
                                'go-storage/operations/multiparter/create_multipart',
                                'go-storage/operations/multiparter/list_multipart',
                                'go-storage/operations/multiparter/write_multipart',
                            ]
                        },
                        {
                            'Pager': [
                                'go-storage/operations/pager/index',
                                'go-storage/operations/pager/create_page',
                                'go-storage/operations/pager/write_page',
                            ]
                        }
                    ],
                    'Pairs': [
                        'go-storage/pairs/index',
                        'go-storage/pairs/content_md5',
                        'go-storage/pairs/content_type',
                        'go-storage/pairs/continuation_token',
                        'go-storage/pairs/credential',
                        'go-storage/pairs/endpoint',
                        'go-storage/pairs/expire',
                        'go-storage/pairs/interceptor',
                        'go-storage/pairs/list_mode',
                        'go-storage/pairs/location',
                        'go-storage/pairs/name',
                        'go-storage/pairs/offset',
                        'go-storage/pairs/pair_policy',
                        'go-storage/pairs/multipart_id',
                        'go-storage/pairs/io_callback',
                        'go-storage/pairs/size',
                        'go-storage/pairs/work_dir'
                    ],
                    'Services': [
                        'go-storage/services/index',
                        'go-storage/services/azblob',
                        'go-storage/services/cos',
                        'go-storage/services/dropbox',
                        'go-storage/services/fs',
                        'go-storage/services/gcs',
                        'go-storage/services/kodo',
                        'go-storage/services/oss',
                        'go-storage/services/qingstor',
                        'go-storage/services/s3',
                        'go-storage/services/uss',
                    ]
                }
            ]
        }
    ]
};
