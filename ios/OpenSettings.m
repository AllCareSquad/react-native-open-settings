#import <UIKit/UIKit.h>

#import "OpenSettings.h"

@implementation OpenSettings

RCT_EXPORT_MODULE()

/// Open system setting page
RCT_REMAP_METHOD(open,
                 openWithPage:(nonnull NSString *)page
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
    NSURL *url = [NSURL URLWithString:UIApplicationOpenSettingsURLString];
    if ([[UIApplication sharedApplication] canOpenURL:url]) {
        [[UIApplication sharedApplication] openURL:url options:@{} completionHandler:nil];
        resolve(@(YES));
    } else {
        NSError *error = [NSError errorWithDomain:@"not support" code:-1 userInfo:nil];
        reject(@"-1", error.domain, error);
    }
}

@end
