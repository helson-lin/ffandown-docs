---
title: FAQ
commentid: qa-comment
---

# common problem

## Dash protocol support

Due to the built-in version of ffmpeg being 4.4.1, it does not support decoding of dash. You can manually upgrade the version of ffmpeg in the lib directory to 6.1 or above (note that ffmpeg requires execution permission)

## Download failed: `input/output error` appears in the log

In this case, first make sure whether the download directory has permissions (if the download has been successful before, it must have permissions)

If the download directory has write permission, then you need to consider whether the download address can be accessed normally:

Linux users can use `wget address url` to see whether the `m3u8` information is returned correctly.

Windows users can use software such as postman to test whether it is parsed normally.

---
If the above is normal, you can go to github to submit an issue.

::: tip
1. Make sure the download directory has write permissions
2. Make sure the download address can be accessed normally
:::

## istoreOS and other openwrt platform issues

At present, we do not have the corresponding equipment to test, and we cannot ensure that it can be used normally.

There are situations where it cannot be used:

1. Test whether docker is used normally
2. Test whether the release is used normally

::: warning
User feedback: istoreOS cannot be used
:::