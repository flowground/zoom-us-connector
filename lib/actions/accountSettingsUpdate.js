/**
 * Auto-generated action file for "Zoom" API.
 *
 * Generated at: 2019-05-07T14:45:08.990Z
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
 * Operation: 'accountSettingsUpdate'
 * Endpoint Path: '/accounts/{accountId}/settings'
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
    "accountId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "accountId": "accountId",
    "alternative_host_reminder": "alternative_host_reminder",
    "cancel_meeting_reminder": "cancel_meeting_reminder",
    "cloud_recording_avaliable_reminder": "cloud_recording_avaliable_reminder",
    "jbh_reminder": "jbh_reminder",
    "low_host_count_reminder": "low_host_count_reminder",
    "email_notification": "email_notification",
    "meeting_capacity": "meeting_capacity",
    "feature": "feature",
    "alert_guest_join": "alert_guest_join",
    "allow_show_zoom_windows": "allow_show_zoom_windows",
    "annotation": "annotation",
    "anonymous_question_answer": "anonymous_question_answer",
    "attendee_on_hold": "attendee_on_hold",
    "attention_tracking": "attention_tracking",
    "auto_answer": "auto_answer",
    "auto_saving_chat": "auto_saving_chat",
    "breakout_room": "breakout_room",
    "chat": "chat",
    "closed_caption": "closed_caption",
    "co_host": "co_host",
    "dscp_audio": "dscp_audio",
    "dscp_marking": "dscp_marking",
    "dscp_video": "dscp_video",
    "e2e_encryption": "e2e_encryption",
    "far_end_camera_control": "far_end_camera_control",
    "feedback": "feedback",
    "file_transfer": "file_transfer",
    "group_hd": "group_hd",
    "original_audio": "original_audio",
    "p2p_connetion": "p2p_connetion",
    "p2p_ports": "p2p_ports",
    "polling": "polling",
    "ports_range": "ports_range",
    "post_meeting_feedback": "post_meeting_feedback",
    "private_chat": "private_chat",
    "remote_control": "remote_control",
    "screen_sharing": "screen_sharing",
    "sending_default_email_invites": "sending_default_email_invites",
    "show_meeting_control_toolbar": "show_meeting_control_toolbar",
    "stereo_audio": "stereo_audio",
    "use_html_format_email": "use_html_format_email",
    "virtual_background": "virtual_background",
    "watermark": "watermark",
    "webinar_question_answer": "webinar_question_answer",
    "whiteboard": "whiteboard",
    "in_meeting": "in_meeting",
    "box": "box",
    "dropbox": "dropbox",
    "google_calendar": "google_calendar",
    "google_drive": "google_drive",
    "kubi": "kubi",
    "microsoft_one_drive": "microsoft_one_drive",
    "integration": "integration",
    "account_user_access_recording": "account_user_access_recording",
    "auto_delete_cmr": "auto_delete_cmr",
    "auto_delete_cmr_days": "auto_delete_cmr_days",
    "auto_recording": "auto_recording",
    "cloud_recording": "cloud_recording",
    "cloud_recording_download": "cloud_recording_download",
    "cloud_recording_download_host": "cloud_recording_download_host",
    "local_recording": "local_recording",
    "record_audio_file": "record_audio_file",
    "record_gallery_view": "record_gallery_view",
    "record_speaker_view": "record_speaker_view",
    "recording_audio_transcript": "recording_audio_transcript",
    "save_chat_text": "save_chat_text",
    "show_timestamp": "show_timestamp",
    "recording": "recording",
    "audio_type": "audio_type",
    "enforce_login": "enforce_login",
    "enforce_login_domains": "enforce_login_domains",
    "enforce_login_with_domains": "enforce_login_with_domains",
    "force_pmi_jbh_password": "force_pmi_jbh_password",
    "host_video": "host_video",
    "join_before_host": "join_before_host",
    "not_store_meeting_topic": "not_store_meeting_topic",
    "participant_video": "participant_video",
    "schedule_meting": "schedule_meting",
    "admin_change_name_pic": "admin_change_name_pic",
    "hide_billing_info": "hide_billing_info",
    "import_photos_from_devices": "import_photos_from_devices",
    "security": "security",
    "audio_conference_info": "audio_conference_info",
    "third_party_audio": "third_party_audio",
    "telephony": "telephony",
    "auto_start_stop_scheduled_meetings": "auto_start_stop_scheduled_meetings",
    "cmr_for_instant_meeting": "cmr_for_instant_meeting",
    "force_private_meeting": "force_private_meeting",
    "hide_host_information": "hide_host_information",
    "list_meetings_with_calendar": "list_meetings_with_calendar",
    "start_airplay_manually": "start_airplay_manually",
    "ultrasonic": "ultrasonic",
    "upcoming_meeting_alert": "upcoming_meeting_alert",
    "weekly_system_restart": "weekly_system_restart",
    "zr_post_meeting_feedback": "zr_post_meeting_feedback",
    "zoom_rooms": "zoom_rooms",
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
        operationId: 'accountSettingsUpdate',
        pathName: '/accounts/{accountId}/settings',
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