module.exports.config = {
    LOCALONLY:true,
    hostname:'localhost',
    db_host     : 'mongo',
    db_port     :  27017,
    db_user     : '',
    db_password : '',
    db_database : 'bootlegger',
    S3_URL:'http://localhost:3000/',
    S3_CLOUD_URL:'http://localhost:3000/upload/',
    S3_TRANSCODE_URL:'http://localhost:3000/transcode/upload/',
    BEANSTALK_HOST:'beanstalk',
    BEANSTALK_PORT:'11300',
    master_url:'http://web',
    master_url_port:'1337',
    CURRENT_EDIT_KEY:'replaceme',
    MIN_CLIP_COUNT:1,
    MAX_CACHE:10*1024*1024*1024,
    MUSIC_LOCATION:'/usr/src/app/www/music/looped/',
    MUSIC_VOLUME:'0.1'
}
