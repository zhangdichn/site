module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'index',
        },
        {
            type: 'category',
            label: 'go-storage',
            items: [
                {
                    type: 'doc',
                    id: 'go-storage/index'
                },
                {
                    'Operations': [
                        'go-storage/operations/index',
                        'go-storage/operations/servicer',
                        'go-storage/operations/storager',
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
