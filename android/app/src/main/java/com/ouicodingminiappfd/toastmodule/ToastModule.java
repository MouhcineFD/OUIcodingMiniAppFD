package com.ouicodingminiappfd.toastmodule;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ToastModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    ToastModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "ToastModule";
    }

    @ReactMethod
    public void show(String message, boolean isShort) {
        int duration = isShort ? Toast.LENGTH_SHORT : Toast.LENGTH_LONG;
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}