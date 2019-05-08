/**
 * Auto-generated action file for "Zoom" API.
 *
 * Generated at: 2019-05-07T14:45:09.006Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / zoom-us-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'userSettingsUpdate'
 * Endpoint Path: '/users/{userId}/settings'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "userId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "userId": "userId",
    "alternative_host_reminder": "alternative_host_reminder",
    "cancel_meeting_reminder": "cancel_meeting_reminder",
    "jbh_reminder": "jbh_reminder",
    "email_notification": "email_notification",
    "large_meeting": "large_meeting",
    "large_meeting_capacity": "large_meeting_capacity",
    "meeting_capacity": "meeting_capacity",
    "webinar": "webinar",
    "webinar_capacity": "webinar_capacity",
    "feature": "feature",
    "annotation": "annotation",
    "attendee_on_hold": "attendee_on_hold",
    "attention_tracking": "attention_tracking",
    "auto_saving_chat": "auto_saving_chat",
    "breakout_room": "breakout_room",
    "chat": "chat",
    "closed_caption": "closed_caption",
    "co_host": "co_host",
    "e2e_encryption": "e2e_encryption",
    "entry_exit_chime": "entry_exit_chime",
    "far_end_camera_control": "far_end_camera_control",
    "feedback": "feedback",
    "file_transfer": "file_transfer",
    "group_hd": "group_hd",
    "non_verbal_feedback": "non_verbal_feedback",
    "polling": "polling",
    "private_chat": "private_chat",
    "record_play_voice": "record_play_voice",
    "remote_control": "remote_control",
    "remote_support": "remote_support",
    "share_dual_camera": "share_dual_camera",
    "virtual_background": "virtual_background",
    "waiting_room": "waiting_room",
    "in_meeting": "in_meeting",
    "auto_delete_cmr": "auto_delete_cmr",
    "auto_delete_cmr_days": "auto_delete_cmr_days",
    "auto_recording": "auto_recording",
    "cloud_recording": "cloud_recording",
    "local_recording": "local_recording",
    "record_audio_file": "record_audio_file",
    "record_gallery_view": "record_gallery_view",
    "record_speaker_view": "record_speaker_view",
    "recording_audio_transcript": "recording_audio_transcript",
    "save_chat_text": "save_chat_text",
    "show_timestamp": "show_timestamp",
    "recording": "recording",
    "audio_type": "audio_type",
    "force_pmi_jbh_password": "force_pmi_jbh_password",
    "host_video": "host_video",
    "join_before_host": "join_before_host",
    "participants_video": "participants_video",
    "pstn_password_protected": "pstn_password_protected",
    "scheduled_meeting": "scheduled_meeting",
    "audio_conference_info": "audio_conference_info",
    "show_international_numbers_link": "show_international_numbers_link",
    "third_party_audio": "third_party_audio",
    "telephony": "telephony",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['global'] = cfg['global'];

    let callParams = {
        spec: spec,
        operationId: 'userSettingsUpdate',
        pathName: '/users/{userId}/settings',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}