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
                        'go-storage/operations/prefix_lister',
                        'go-storage/operations/prefix_segments_lister',
                        'go-storage/operations/reacher',
                        'go-storage/operations/segmenter',
                        'go-storage/operations/statistician',
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
