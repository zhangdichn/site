module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'README',
        },
        {
            type: 'category',
            label: 'Golang',
            items: [
                {
                    'Operations': [
                        'golang/operations/README',
                        'golang/operations/servicer',
                        'golang/operations/storager',
                        'golang/operations/prefix_lister',
                        'golang/operations/prefix_segments_lister',
                        'golang/operations/reacher',
                        'golang/operations/segmenter',
                        'golang/operations/statistician',
                    ],
                    'Services': [
                        'golang/services/README',
                        'golang/services/azblob',
                        'golang/services/cos',
                        'golang/services/dropbox',
                        'golang/services/fs',
                        'golang/services/gcs',
                        'golang/services/kodo',
                        'golang/services/oss',
                        'golang/services/qingstor',
                        'golang/services/s3',
                        'golang/services/uss',
                    ]
                }
            ]
        }
    ]
};
