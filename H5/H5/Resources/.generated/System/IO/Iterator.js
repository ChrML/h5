    H5.define("System.IO.Iterator$1", function (TSource) { return {
        inherits: [System.Collections.Generic.IEnumerable$1(TSource),System.Collections.Generic.IEnumerator$1(TSource)],
        fields: {
            state: 0,
            current: H5.getDefaultValue(TSource)
        },
        props: {
            Current: {
                get: function () {
                    return this.current;
                }
            },
            System$Collections$IEnumerator$Current: {
                get: function () {
                    return this.Current;
                }
            }
        },
        alias: [
            "Current", ["System$Collections$Generic$IEnumerator$1$" + H5.getTypeAlias(TSource) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"],
            "Dispose", "System$IDisposable$Dispose",
            "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$" + H5.getTypeAlias(TSource) + "$GetEnumerator", "System$Collections$Generic$IEnumerable$1$GetEnumerator"]
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            Dispose: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) {
                this.current = H5.getDefaultValue(TSource);
                this.state = -1;
            },
            GetEnumerator: function () {
                if (this.state === 0) {
                    this.state = 1;
                    return this;
                }

                var duplicate = this.Clone();
                duplicate.state = 1;
                return duplicate;
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return this.GetEnumerator();
            },
            System$Collections$IEnumerator$reset: function () {
                throw new System.NotSupportedException.ctor();
            }
        }
    }; });
