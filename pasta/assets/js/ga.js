$(function() {
    // Mobile Detect
    let md = new MobileDetect(window.navigator.userAgent);

    // Sample
    // data-gtag-action="<?=$device?>_CLICK" data-gtag-category="BANNER" data-gtag-label="생일기념 쿠폰"
    // GA Button Event
    $('.btn-ga').on('click', function() {
        gtag('event', (md.mobile() ? 'MO_' : 'PC_') + $(this).data('gtag-action') + '_' + $(this).data('gtag-category') + '_' + $(this).data('gtag-label'), {});
        gtag('event', (md.mobile() ? 'MO_' : 'PC_') + $(this).data('gtag-action'), {
            'event_category' : $(this).data('gtag-category'),
            'event_label' : $(this).data('gtag-label')
        });
    });
});