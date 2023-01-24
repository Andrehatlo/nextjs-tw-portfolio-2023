---
title: "Reactive Data Streams - quick rxJava Summery"
metaTitle: "Reactive Data Streams - quick rxJava Summery"
metaDesc: "Inpired by the Reactive movement - manifesto, rxJava is an implementation of Reactive Stream specification created by netflix. "
socialImage: "/images/netflix.png"
date: "2020-04-01"
tags:
    - Java
    - rxJava
---

Inspired by the (Reactive movement - manifesto)[https://www.reactivemanifesto.org/], rxJava is an implementation of Reactive Stream specification created by Netflix. Reactive streams is a concept for handling data streams asynchronous. It is built by Netflix to be able to effectively reduce network chattiness. Their goal with rxJava is to allow the client to invoke a single "heavy" client request that is executed in parallel on the server.

Its concept is based on an `Observable`/`Iterable` type and `Subscribing` on these to send data streams async.

The following notes are not explained in high detail. Since in the process of writing this i switched to the `Reactor` library, because of upgrading to Spring Boot 2, which needs Java 8 and rxJava only runs Java 6. Both are based on a similar concept but different in structure.

## Observable / Iterable

**`Observable`** data type can be thought of as a "push" equivaltent to `Iterable` which is "pull".

**`Iterable`** data type pulls values from the producer and the thread blocks until those values arrive.

The producer pushes values to the consumer whenever values are available.

Which creates an approach which is more flexible, because values can arrive synchronously or async.

#### `Observable` type

Adds two missing semantiqcs which are present in the `Iterable` type:

- Producer can signal to the consumer that there is no more data available.
- Producer can signal to the consumer that an error har occured.

This makes `Observable` and `Iterable` unified.

The only difference is the direction which the data flows.

Always return `Observable`, always request `Iterable`.

#### Creating an Observable from existing Data structures

- From existing data structures:
- Use the Observable `just()` and `from()` methods to convert objects, lists, or arrays of objects into Observables that can emit those objects.

```java

Observable<String> o = Observable.from("a","b","c");

// Inserting a list into an observable
def list = [5,6,7,8]
Observable<Integer> o = Observable.from(list);

//
Observable<String> o = Observable.just("one object");

```

#### Creating an Observable via the `create()` method

- Via the `create()` method, you can implement async i/o, computational operations, or even 'infinite' streams of data by designing your own Observable.

###### Synchronous Observable example:

- Custom Observable that blocks when subscribed to (does not spawn an extra thread)

```java
def customObservableBlocking() {
    return Observable.create(
        { aSub ->
            for (int i=0; i<50; i++) {
                if (false == aSub.isUnsubscribed()) {
                    aSub.onNext("value_" + i);
                };
        }
        // after sending all values we complete the sequence
        if (false == aSub.isUnsubscribed()) {
            aSub.onCompleted();
        }
    });
}

// Output:
customObservableBlocking().sub({ it -> println(it); });
```

###### Asynchronous Observable example:

- Observable that emits 75 strings.
- Doesn't block when subscribed to as it spawns a separate thread.

```groovy
def customObservableNonBlocking() {
    return Observable.create(
        { sub ->
            final Thread t = new Thread(new Runnable() {
                void run() {
                    for (int i = 0; i < 75; i++) {
                        if (true == sub.isUnsubscribed()) {
                            return;
                        }
                        sub.onNext("value_" + i);
                    }
                    if (false == sub.isUnsubscribed())
                }
            });
            t.start();
        }
    );
}
// Output:
customObservableNonBlocking().sub({ println(it) })
```

- Fetch a list of Wiki articles async, in Groovy:

```groovy
def fetchWikiArticleAsync(String... wikiArticleNames) {
    return Observable.create({ sub ->
        Thread.start( {
            for (articleName in wikiArticleNames) {
                if (true == sub.isUnsubscribed()) {
                    return;
                }
                sub.onNext(new URL("http://en.wikipedia.org/wiki/" + articleName).getText());
            }
            if (false == sub.isUnsubscribed()) {
                sub.onCompleted();
            }
        });
        return(sub);
    });
}

// Output:
fetchWikiArticleAsync("Tiger", "Elephant")
    .sub({println "--- Article ---\n" + it.substring(0, 125); });
```

#### Transforming Observables with Operatiors

- Chain `operators` together to transform and compose Observables
- Async call `customObservableNonBlock` with chaining:

```java
def simpleComposition() {
    customObservableNonBlocking().skip(10).take(5)
        .map({ stringValue -> return stringValue + "_xform" })
        .subscribe({ println "onNext => " + it })
}
```

- `skip(10)` - Jumps to the 10th value
- `take(5)` - Grabs the 5 next values
- `map(...)` - maps each value and concatenates `stringValue` with `_xform` => `$stringValue_xform`
- `subscribe(...)` - returns the mapped values with `onNext =>` concatenated

This is an early rxJava summery. Switching to the `reactor` library instead, the concepts are the same but structured differently/more simply and accepts Java 8.

More information about rxJava, check it out here: (HERE)[https://github.com/ReactiveX/RxJava]
